import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useReviewStore = defineStore('reviews', () => {
  const END_POINT = 'https://ritzy-kiwi-verbena.glitch.me'
  const reviews = ref([])
  const allReviews = ref([])
  const editedData = ref({
    editable: false,
    item: null
  })

  async function getAllReviews() {
    try {
      const reviews = await fetch(`${END_POINT}/reviews?_sort=id&_order=desc`)
      const data = await reviews.json()
      allReviews.value = data
    } catch (error) {
      console.log(error)
    }
  }

  async function addReview(params) {
    const response = await fetch(`${END_POINT}/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params)
    })

    const newReview = await response.json()
    reviews.value = [newReview, ...reviews.value]
    getAllReviews()
  }

  function editReview(params) {
    let editedDataObj = { editable: true, item: params }
    editedData.value = editedDataObj
  }

  async function updateReview(params) {
    const response = await fetch(`${END_POINT}/reviews/${params.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params)
    })

    const updatedReview = await response.json()
    allReviews.value.map(item => item.id === params.id ? { ...item, ...updatedReview } : item)
    getAllReviews()

    let editedDataObj = { editable: false, item: null }
    editedData.value = editedDataObj
  }

  async function deleteReview(params) {
    const response = await fetch(`${END_POINT}/reviews/${params.id}`, {
      method: 'DELETE'
    })

    const updatedReview = await response.json()
    allReviews.value.filter(item => item.id !== params.id)
    getAllReviews()
  }

  const reviewLists = computed(() => allReviews.value)

  const editedReview = computed(() => editedData.value)

  const reviewCount = computed(() => allReviews.value.length)

  const averageRating = computed(() => {
    let temp = allReviews.value.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / allReviews.value.length

    temp = temp.toFixed(1).replace(/[.,]0$/, '')
    return temp
  })

  return { getAllReviews, addReview, editReview, updateReview, deleteReview, editedReview, reviewLists, reviewCount, averageRating }
})
