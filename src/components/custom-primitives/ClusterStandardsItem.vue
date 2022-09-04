<template>
 <card-component :resetMargins="true">
   <template v-slot:default>
     <custom-list-item :hide-markers="true">
       <div class="flex md:text-center flex-col gap-y-sm">
         <div class="flex md:flex-col items-center justify-start gap-x-[1rem]">

           <h3 class="text-[1.3rem]" v-if="!href">
             <slot name="title"></slot>
           </h3>

           <a v-else :href="href">
             <h3 class="text-[1.3rem] underline text-arda-deep-orange">
             <slot name="title"></slot>
             </h3>
           </a>

           <span class="default-content" v-if="date">
          (<slot name="date"></slot>)
        </span>
         </div>

         <slot name="description"></slot>
       </div>
     </custom-list-item>
   </template>
 </card-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CustomListItem from "@/components/custom-primitives/CustomListItem.vue";
import CardComponent from "@/components/custom-primitives/CardComponent.vue";

export default defineComponent({
  components: {
    CustomListItem,
    CardComponent,
  },

  props: {
    linkHref: String,
    date: String,
  },

  computed: {
    href() {
      const propsLink = this.$props.linkHref;
      return propsLink ? propsLink : '';
    }
  }
})
</script>
