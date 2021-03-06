import * as API from '../../services/stories.services'
import { toggleLoading } from './web.actions'

export const getAllStories = (payload) => ({
  type: "GET_ALL_STORIES",
  payload
})

export const getAllStoriesAsync = (query, loading) => {
  return dispatch => {
    if (loading) dispatch(toggleLoading(true))

    API.getAllStories(query)
      .then((res) => {
        if (res.data && res.data.status) {
          dispatch(
            getAllStories({
              stories: res.data.stories,
              storyPage: {
                totalPage: res.data.totalPage,
                currentPage: res.data.currentPage,
                totalStories: res.data.totalStories,
              },
            })
          )
        } else {
          alert('ERROR! ' + res.data.message)
        }
      })
      .catch((err) => {
        dispatch(
          alert('ERROR! ' + err)
        )
      })
      .then(() => {
        dispatch(toggleLoading(false))
      })
  }
}

export const createStory = (payload) => ({
  type: 'CREATE_ONE_STORY',
  payload
})

export const createStoryAsync = (newStory) => {
  return dispatch => {
    dispatch(toggleLoading(true))
    
    API.createStory(newStory)
      .then(res => {
        if (res.data && res.data.status) {
          dispatch(
            createStory(res.data.newStory)
          )
        } else {
          alert('ERROR! ' + res.data.message)
        }
      })
      .catch((err) => {
        dispatch(
          alert('ERROR! ' + err)
        )
      })
      .then(() => {
        dispatch(toggleLoading(false))
      })
  }
}

export const updateStory = (payload) => ({
  type: "UDPATE_ONE_STORY",
  payload
})

export const updateStoryAsync = (_id, newStory, index) => {
  return dispatch => {
    dispatch(toggleLoading(true))

    API.updateStory(_id, newStory)
      .then((res) => {
        if (res.data && res.data.status) {
          dispatch(
            updateStory({
              stories: res.data.newStory,
              index
            })
          )
        } else {
          alert('ERROR! ' + res.data.message)
        }
      })
      .catch((err) => {
        dispatch(
          alert('ERROR! ' + err)
        )
      })
      .then(() => {
        dispatch(toggleLoading(false))
      })
  }
}

export const removeStoryAsync = (_id) => {
  return (dispatch) => {
    API.deleteStory(_id)
      .then((res) => {
        if (res.data && res.data.status) {
          dispatch(removeStory(_id))
        } else {
          alert('ERROR! ' + res.data.message)
        }
      })
      .catch((err) => {
        dispatch(
          alert('ERROR! ' + err)
        )
      })
      .then(() => {
        dispatch(toggleLoading(false))
      })
  }
}

export const removeStory = (payload) => {
  return {
    type: "DELETE_ONE_STORY",
    payload,
  }
}
