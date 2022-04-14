<template>
   <div>
      <the-navbar></the-navbar>
      <v-main class="tw-bg-secondary-background tw-min-h-screen">
         <v-container class="tw-h-full tw-px-0 xl:tw-px-20">
            <div>
               <stats-view-card :allTimeViews="allTImeViews"
               :thisWeekViews="thisWeekViews"
               :todayViews="todayViews"
                v-if="isLoadingCompleted"></stats-view-card>
               <stats-view-skeleton
                  v-if="!isLoadingCompleted"
               ></stats-view-skeleton>
               <div class="tw-mt-6">
                  <stats-graph-skeleton
                     v-if="!isLoadingCompleted"
                  ></stats-graph-skeleton>
                  <div v-if="isLoadingCompleted">
                     <stats-graph
                        v-for="(post, index) in postArray"
                        :key="index"
                        :title="post.name"
                        :img="post.image_path"
                        :createdAt="post.created_at"
                        :dates="dates"
                        :views="views"
                        :likesArray="likesArray[index].like"
                        :likesDates="likesArray[index].likeDate"
                        :viewsArray="viewArray[index].view"
                        :viewsDates="viewArray[index].viewDate"
                     ></stats-graph>
                  </div>
               </div>
            </div>
         </v-container>
      </v-main>
   </div>
</template>
<script>
import Navbar from "../Common/TheNavbar.vue";
import StatsGraph from "../components/StatsGraph.vue";
import StatsGraphSkeleton from "../components/StatsGraphSkeleton.vue";
import StatsViewCard from "../components/StatsViewCard.vue";
import StatsViewSkelton from "../components/StatsViewSkelton.vue";
// import EditProfile from "../components/EditProfile.vue"
import axios from "axios";
export default {
   data() {
      return {
         views: [12, 1, 5, 6, 12, 111, 3, 4, 67, 45, 11, 12, 13, 14, 15],
         dates: [
            "today",
            "yesteddy",
            "55",
            "43",
            "12",
            "14",
            "67",
            "1",
            "3",
            "56",
            "11",
            "12",
            "13",
            "14",
            "15",
         ],
         isLoadingCompleted: false,
         postArray: [],
         likesArray: [],
         viewArray: [],
         loading:false,
         todayViews:0,
         allTImeViews:0,
         thisWeekViews:0,
      };
   },
   computed: {
      slug() {
         return this.$store.getters.getSlug;
      },
   },
   watch: {
      slug(value) {
         this.getData();
         console.log(value);
         // this.filterPost(value);
      },
   },
   created() {
      this.getData();
   },
   methods: {
      getData() {
         if (this.$store.getters.getSlug) {
            console.log();
            axios.get(`/post/views`).then((res)=>{
               console.log(res.data);
               this.todayViews=res.data.todays_Views;
               this.allTImeViews=res.data.total_Views;
               this.thisWeekViews=res.data.weekly_Views;
               // this.postArray = res.data.post;
               // this.likesArray = res.data.likes;
               // this.viewArray = res.data.views;
               // this.isLoadingCompleted = true;
               // this.loading = true;
            
            })
            axios
               .get(`/user/${this.slug}/postStats`)
               .then((res) => {
                  this.postArray = res.data.post;
                  // console.log(res.data.post);
                  this.filterViewArray();
               })
               .finally(() => {
                 
               });
         }
      },
      filterViewArray() {
         this.postArray.forEach((post) => {
            let tempView = [];
            let tempViewDate=[];
            let tempLike = [];
            let tempLikeDate=[];
            if (post.views.length == 0) {
               console.log("No views");
            }
            post.views.forEach((view) => {
               // console.log(view);
               tempView.push(view.views);
               tempViewDate.push(view.created_at);

               // console.log(view.views);
               // this.viewArray.push(view.count);
            });
            post.likes.forEach((like) => {
               // console.log(like);
               tempLike.push(like.like);
               tempLikeDate.push(like.created_at);
               // console.log(like.likes);
               // this.likesArray.push(like.count);
            });
            let obj={
               view:tempView,
               viewDate:tempViewDate,
            }
            this.viewArray.push(obj);
            let obj2={
               like:tempLike,
               likeDate:tempLikeDate,
            }
            this.likesArray.push(obj2);
            // console.log(tempLike);
            // console.log(tempLikeDate);
         });
         console.log(this.viewArray);
         console.log(this.likesArray);
          this.isLoadingCompleted = true;
      },
   },
   components: {
      "the-navbar": Navbar,
      "stats-graph": StatsGraph,
      "stats-view-card": StatsViewCard,
      "stats-view-skeleton": StatsViewSkelton,
      "stats-graph-skeleton": StatsGraphSkeleton,
      // "edit-profile":EditProfile
   },
};
</script>
