<template>
  <div>
    <loader :active="isLoading" />
    <div class="sgds-container search-content" v-show="!isLoading">
      <p class="search-result-status">
        {{
          `Showing ${
            filterSearchResults.length > 0 ? filterSearchResults.length : 0
          } out of ${totalPages}`
        }}
      </p>
      <h6 class="is-danger" v-if="errorMsg">{{ errorMsg }}</h6>
      <div class="card-grid-container is-fullwidth">
        <div
          class="sgds-card-list"
          v-for="result of filterSearchResults"
          :key="result.url"
        >
          <card>
            <template v-slot:main-content>
              <h4>
                <a :href="result.url" v-html="result.title"></a>
              </h4>
              <p v-html="result.description"></p>
            </template>
            <template v-slot:front-matter-attributes>
              <div class="spacing-container-vertical spacing-16">
                <div
                  v-if="result.targetGroup !== ''"
                  class="spacing-container-vertical spacing-8"
                >
                  <strong>Target Group</strong>
                  <p v-html="result.targetGroup"></p>
                </div>
                <div class="spacing-container-vertical spacing-8">
                  <strong>Category</strong>
                  <p v-html="result.category"></p>
                </div>
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../lib/Loader.vue";
import Card from "../lib/Card.vue";
import useLunrSearch from "../composables/useLunrSearch";
import { computed } from "@vue/composition-api";

export default {
  components: { Loader, Card },
  setup() {
    let queryParam = new URL(window.location.href).searchParams.get("query");
    const {
      isLoading,
      totalPages,
      isNonEmptySearch,
      searchResults,
      generateSearchResults,
      errorMsg,
    } = useLunrSearch();

    generateSearchResults({
      queryParam: queryParam,
      jsonPath: "/search/events.json",
      lunrIndexFields: [
        "title",
        "description",
        "targetGroup",
        "category",
        "content",
        "random",
      ],
    });

    document.getElementById("query-all-events").value = queryParam;

    return {
      totalPages,
      isLoading,
      isNonEmptySearch,
      searchResults,
      errorMsg,
    };
  },
  computed: {
    filterSearchResults: function() {
      const dateParam = new URL(window.location.href).searchParams.get(
        "year_filter"
      )
        ? new URL(window.location.href).searchParams.get("year_filter")
        : "All Time";

      const categoryParam = new URL(window.location.href).searchParams.get(
        "category_filter"
      )
        ? new URL(window.location.href).searchParams.get("category_filter")
        : "All Types";

      document.getElementById("query-all-year").value = dateParam;
      document.getElementById("query-all-category").value = categoryParam;

      return this.searchResults
        .filter((item) => {
          // Converts the date in the page's front matter to a date object then to full years
          const eventDateInYears = new Date(item.date).getFullYear();
          // If no specified date (by param), just return ignore and return everything as it is
          if (dateParam === "All Time") {
            return true;
          }
          // If there is a targetted / specific year the user wants, then provide filtering
          if (eventDateInYears == dateParam) {
            return true;
          }
        })
        .filter((item2) => {
          if (categoryParam === "All Types") {
            return true;
          }

          if (item2 == categoryParam) {
            return true;
          }
        });
    },
  },
};
</script>
