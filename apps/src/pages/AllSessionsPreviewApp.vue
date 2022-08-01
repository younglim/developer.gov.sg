<template>
  <div>
    <table
      :key="index"
      class="margin--bottom--lg print-container"
      v-for="(
        daySpecifcResult, index
      ) in filteredResult.groupedByTimingSearchResults"
    >
      <!-- Day -->
      <thead>
        <tr>
          <th class="text--center" colspan="2">
            <h2 class="margin--bottom--lg">Day: {{ daySpecifcResult.day }}</h2>
          </th>
        </tr>
      </thead>
      <!-- Categories -->
      <div>
        <div class="margin--top">
          <template v-for="(option, index) in daySpecifcResult.categories">
            <label :key="index" class="pilllist-item">
              <span class="is-flex" style="align-items: center">
                <img
                  :src="option.category.icon"
                  class="margin--bottom--none margin--left--none margin--right--sm"
                />
                <b class="is-size-8 margin--right--sm">
                  {{ option.category.type }}
                </b>
              </span>
            </label>
          </template>
        </div>
      </div>
      <div class="margin--top">
        <div
          :key="key"
          class="margin--bottom--sm"
          v-for="(result, key) of daySpecifcResult.events"
        >
          <div class="is-borderless">
            <!-- Header -->
            <div
              class="sgds-accordion-header is-active print-inner-container"
              style="border: 0px"
            >
              <div class="is-flex" style="align-items: center">
                <p
                  class="has-text-weight-semibold has-text-black margin--bottom--none margin--right--sm"
                >
                  {{ result.time }}
                </p>
              </div>
            </div>
            <!-- Content -->
            <div class="margin--sm">
              <div
                v-for="(item, index) in result.events"
                :key="index"
                class="print-inner-container"
              >
                <div
                  class="sgds-card-variant-all-agenda-content margin--top--sm margin--left--xs margin--right--xs padding--sm has-text-dark"
                >
                  <!-- Title and Icon-->
                  <div>
                    <div class="is-flex" style="align-items: center">
                      <img
                        :src="item.category.icon"
                        class="margin--right--sm margin--left--none margin--bottom--none margin--top--none"
                      />
                      <p
                        class="is-size-5 has-text-weight-bold margin--bottom--xs"
                      >
                        {{ item.title }}
                      </p>
                    </div>
                  </div>
                  <!-- Time and category-->
                  <small
                    >{{ item.timeslot_metadata.start_time }} -
                    {{ item.timeslot_metadata.end_time }} /
                    {{ item.category.type }}
                  </small>
                  <!-- Description-->
                  <div
                    v-if="item.content"
                    class="margin--top--sm margin--bottom--sm"
                  >
                    <small>{{ item.content }}</small>
                  </div>
                  <!-- Speakers -->
                  <div v-for="(speaker, index) in item.speakers" :key="index">
                    <p class="muted margin--bottom--none">
                      <small v-if="Object.keys(speaker).length">
                        {{ speaker.name }}, {{ speaker.title }}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </table>
  </div>
</template>

<script>
import Card from "../lib/Card.vue";
import Loader from "../lib/Loader.vue";
import useLunrSearch from "../composables/useLunrSearch";
import { computed, watch } from "@vue/composition-api";

export default {
  components: { Loader, Card },
  setup() {
    // Variables
    const scriptElement = document.querySelector(
      'script[data-id="all-agenda-page"]'
    );

    const { jsonPath } = scriptElement.dataset;

    // Search
    const {
      searchQuery,
      isLoading,
      isNonEmptySearch,
      searchResults,
      generateSearchResults,
      errorMsg,
    } = useLunrSearch();

    generateSearchResults({
      queryParam: "",
      jsonPath: jsonPath,
      lunrIndexFields: [],
    });

    const filteredResult = computed(() => {
      // Gets all the categories found within filteredSearchResult and sort it
      const categories = searchResults.value
        .map(item => {
          return {
            category: item.category,
            timeslot_metadata: item.timeslot_metadata,
          };
        })
        .reduce((acc, curr) => {
          if (!acc.find(item => item.category.type === curr.category.type)) {
            acc.push(curr);
          }
          return acc;
        }, [])
        .sort((a, b) => {
          const dateA = new Date(a.timeslot_metadata.start_date);
          const dateB = new Date(b.timeslot_metadata.start_date);
          return dateA - dateB;
        });

      // Sorts everything by timing
      const sortedFilteredSearchResult = searchResults.value.sort((a, b) => {
        const dateA = new Date(a.timeslot_metadata.start_date);
        const dateB = new Date(b.timeslot_metadata.start_date);

        return dateA - dateB;
      });

      // Aggregrate the data by it's day
      let index = 1;
      const groupedByDaySearchResults = sortedFilteredSearchResult.reduce(
        (acc, curr) => {
          const date = new Date(curr.timeslot_metadata.start_date).getDay();
          if (!acc[date]) {
            acc[date] = {
              events: [],
              day: index++,
              categories: categories.filter(item => {
                if (
                  date === new Date(item.timeslot_metadata.start_date).getDay()
                ) {
                  return item.category;
                }
              }),
            };
          }

          acc[date].events.push(curr);
          return acc;
        },
        {}
      );

      const groupedByTimingSearchResults = Object.values(
        groupedByDaySearchResults
      ).map(val => {
        // Group by timing
        const groupedByTiming = val.events.reduce((acc, curr) => {
          const time = curr.timeslot_metadata.start_time;
          if (!acc[time]) {
            acc[time] = { events: [], time: time };
          }

          acc[time].events.push(curr);
          return acc;
        }, {});

        return {
          ...val,
          events: Object.values(groupedByTiming),
        };
      });

      console.log(groupedByTimingSearchResults);

      return {
        sortedFilteredSearchResult,
        groupedByDaySearchResults,
        groupedByTimingSearchResults,
      };
    });

    return {
      searchQuery,
      isLoading,
      isNonEmptySearch,
      searchResults,
      errorMsg,
      filteredResult,
    };
  },
};
</script>

<style scoped>
.small-rounded-corner {
  border-radius: 0.2em;
}

@media print {
  .print-container:not(:first-child) {
    page-break-before: always;
    margin-top: 5rem;
  }

  .print-inner-container {
    break-inside: avoid;
  }
}

@page {
  size: A4;
  margin-top: 50px;
  margin-bottom: 50px;
}

</style>
