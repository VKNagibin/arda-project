<template>
  <card-component class="mb-lg" :image-src="standards" img-alt="Иллюстрация стандартов">
    <template v-slot:heading>
      <h2 class="font-oswald w-full ">Повестка</h2>
    </template>
    <template v-slot:default>
      <p class="h-min">
        ИТ-индустрия стремительно меняется, происходит переход от фиксированной проектной разработки к итеративной продуктовой. С развитием гибких методологий и инженерных практик процесс создания цифровых продуктов становится непрерывным. Все это влияет и на рынок аутсорсинга ИТ-услуг.
      </p>
      <p>
        На стороне заказчика услуги все чаще есть собственный IT-отдел и развитые компетенции. Ответственность за управление разработкой распределяется между внутренней и внешней командой. На стыке инсорсинга и аутсорсинга появляются новые гибридные модели сотрудничества: аутстаффинг, выделенные команды, расширение персонала.
      </p>
    </template>
  </card-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardComponent from "@/components/CardComponent.vue";
import standards from "../../assets/images/standards.png"

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
