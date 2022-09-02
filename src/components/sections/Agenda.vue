<template>
  <div class="flex flex-col gap-[1.5rem] pl-[2rem] mb-[4rem]">
    <h3 class="section-heading">
      Повестка
    </h3>
    <div class="flex items-center relative md:flex-col gap-[3rem]">
      <div class="flex flex-col w-[60%] md:w-full md:text-center gap-[2rem]">
        <p class="default-content">
          ИТ-индустрия стремительно меняется, происходит переход от фиксированной проектной разработки к итеративной продуктовой. С развитием гибких методологий и инженерных практик процесс создания цифровых продуктов становится непрерывным. Все это влияет и на рынок аутсорсинга ИТ-услуг.
        </p>
        <p class="default-content">
          На стороне заказчика услуги все чаще есть собственный IT-отдел и развитые компетенции. Ответственность за управление разработкой распределяется между внутренней и внешней командой. На стыке инсорсинга и аутсорсинга появляются новые гибридные модели сотрудничества: аутстаффинг, выделенные команды, расширение персонала.
        </p>
      </div>
      <img class="block w-[40%] md:w-[60%] h-full md:static absolute top-0 right-0 object-center object-contain" :src="standards" alt="Стандарты">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardComponent from "@/components/custom-primitives/CardComponent.vue";
import standards from "../../assets/images/arda-style-components/standards.png"

export default defineComponent({
  components: {
    CardComponent,
  },

  data() {
    return {
      standards,
    }
  }
})
</script>
