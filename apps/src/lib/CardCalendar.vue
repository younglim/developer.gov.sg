<template>
  <div class="sgds-card typography-no-margin">
    <div class="sgds-card-content">
      <div class="content-grid is-flex">
        <!--Calendar -->
        <slot name="calendar"></slot>
        <!--Content -->
        <div>
          <slot name="header"></slot>
          <slot name="content">
            <div
              class="sgds-card-content-space-between spacing-container-vertical spacing-16"
            >
              <div class="spacing-container-vertical spacing-16">
                <slot name="main-content"></slot>
              </div>
              <slot name="front-matter-attributes"></slot>
            </div>
          </slot>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>
