import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from "@/views/ProfileView.vue";
import StandardsListSection from "@/components/sections/StandardsListSection.vue";
import WebinarsSection from "@/components/sections/WebinarsSection.vue";
import UserProfileSection from "@/components/sections/UserProfileSection.vue";
import OperativeInformationSection from "@/components/sections/OperativeInformationSection.vue";
import ResourceCardSection from "@/components/sections/ResourceCardSection.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profilePage',
    name: 'personal page',
    component: ProfileView,
    children: [
      {
        path: 'operativeInfo',
        name: 'operativeInfo',
        component: OperativeInformationSection,
      },
      {
        path: 'resourceCard',
        name: 'resourceCard',
        component: ResourceCardSection,
      },
      {
        path: 'standards',
        name: 'standards',
        component: StandardsListSection,
      },
      {
        path: 'webinars',
        name: 'webinars',
        component: WebinarsSection,
      },
      {
        path: 'profile',
        name: 'profile',
        component: UserProfileSection,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;