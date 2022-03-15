<script>
import {Line} from "vue-chartjs"
export default {
    extends:Line,
    props:{
        
        dates:{
            type:Array
        },
        views:{
            type:Array
        },
        options:{
            type:Object
        }
    },
    mounted(){
        this.renderChart({
            labels:[
                'Jan','Feb','mar','apr','may','jun','july'
            ],
            datasets:[{
                label:'Acheivement',
                data:[20,39,70,15,50,80,22]
            }]
        },{
            responsive:true, maintaintainAspectRation:false
        });
    }
    
}
</script>