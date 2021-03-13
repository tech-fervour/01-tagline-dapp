<template>
    <div>
        <form class="p-2" @submit="onSubmit">
            <input type="text" class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2" name="tagline" v-model="tagline.value" :ref="tagline.ref" placeholder="New Tagline Goes Here..." />
            <p class="text-xs p-2 text-red-500" v-if="tagline.error">{{ tagline.error.message }}</p>
            <button type="submit" class="text-base font-medium rounded-lg p-3 text-white bg-cyan-600 mt-4">Update Tagline</button>
        </form>
    </div>
</template>

<script>
import store from './../store'
import { useForm } from 'vue-hooks-form'

export default {
    setup() {
        const { useField, handleSubmit } = useForm({
            defaultValues: {}
        })
        const tagline = useField('tagline', {
            rule: { required: true }
        })
        const onSubmit = (data) => {
            // console.log(data.tagline)
            const newTagline = data.tagline
            store.dispatch('updateTagline', {
                taglineData: newTagline
            })
        }
        return {
            tagline,
            onSubmit: handleSubmit(onSubmit),
        }
    }
}
</script>