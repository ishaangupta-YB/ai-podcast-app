import React from 'react'

function PodcastPage({params} : {params: {podcastId:string}}) {
    return (
    <div>
      <p className='text-white-1'> 
      PodcastPage - {params.podcastId}
      </p>
    </div>
  )
}

export default PodcastPage
