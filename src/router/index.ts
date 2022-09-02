import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/general/HomeView.vue'
import ProfileView from "@/views/general/ProfileView.vue";
import StandardsListSection from "@/views/nested/StandardsView.vue";
import WebinarsSection from "@/views/nested/WebinarsView.vue";
import UserProfileSection from "@/components/sections/UserProfile.vue";
import OperativeInformationSection from "@/views/nested/OperativeInformationView.vue";
import ResourceCardSection from "@/views/nested/ResourceCardView.vue";

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