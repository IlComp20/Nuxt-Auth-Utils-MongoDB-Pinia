<script setup>

definePageMeta({
    layout: 'default'
})



const fetchExample = async () => {
    try {
        const response = await fetch(`/api/example/example`, {
            method: 'GET',
            credentials: 'include',
        });

        if (response.status === 200) {
            const data = await response.json();
            console.log(data)
        } else {
            toast.add({
                title: 'Error',
                description: 'Error',
                color: 'red',
                timeout: 1500
            })
        }
    } catch (error) {
        console.error(error);
        toast.add({
            title: 'Server Error ',
            description: 'Server Error',
            color: 'red',
            timeout: 1500
        })
    }
};

// Fetch products list at start
onMounted(async () => {
    await fetchExample();
});
</script>

<template>
    <div>Protected api example</div>
</template>
