<template>
    <div class="relative mb-7" data-twe-input-wrapper-init>
        <input
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            :type="type"
            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput1"
            :placeholder="placeholder"
        />
        <label
            for="exampleFormControlInput1"
            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
            >{{ placeholder }}
        </label>
    </div>


</template>

<script setup>
import {
  Input,
  initTWE,
} from "tw-elements";
import { onMounted } from "vue";
onMounted(() => {
  initTWE({ Input });
})
const props = defineProps({
    modelValue: {
        type: String,
        default: "",
    },
    placeholder: {
        type: String,
        default: "",
    },
    type:{
        type: String,
        default: "text"
    }
  });



</script>
