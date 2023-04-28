<template>
    <div class="frame_search">
        <input  type="search" 
                placeholder="这是一个搜索框" 
                @focus="focusMsg($event,'focus')" 
                @blur = "focusMsg($event,'blur')"
                ref="searchOBJ"/>
    </div>

</template>

<script setup lang="ts">
    import { ref } from 'vue'
    const searchOBJ = ref();
    const focusMsg = (e:object,type:string) =>{
        if(type == 'focus'){
            searchOBJ.value.placeholder = ' : >';
            searchOBJ.value.style.width = '30vw';
        }else{
            searchOBJ.value.placeholder = '搜索想要的内容~';
            searchOBJ.value.style.width = '20vw';
        }
    }
</script>

<style scoped >
    .frame_search{
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        left: 3%;
    }
    .frame_search input{
        width: 20vw;
        transition: all 0.5s;
        height: 5vh;
        font-size: 1.4em;
        border-radius: 12px;
        background: url('../../public/search.png') no-repeat;
        background-size: 1.6vw;
        background-position: 0.6vw 50%;
        background-color: var(--search-color);
        border: 0;
        outline: none;
        color: var(--font-color);
        padding: 0 1em 0 2.4em;
        box-shadow: 0 0 0.2em #ffffff09;
    }

    input::-webkit-input-placeholder{
        color:var(--font-color);
    }
</style>