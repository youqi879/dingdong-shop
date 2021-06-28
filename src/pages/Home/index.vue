<template>
    <div>
        <TypeNav></TypeNav>
        <listContainer></listContainer>
        <Recommend></Recommend>
        <Rank></Rank>
        <Like></Like>
        <Floor></Floor>
        <Brand></Brand>
    </div>
</template>


<script>
import listContainer from './listContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
export default {
    components:{
        listContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand
    }
}
</script>

<style scoped>

</style>