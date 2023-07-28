"use client"

import { FacebookProvider, CustomChat } from 'react-facebook';

const FbChatPlugin = () => {
  return (
    <FacebookProvider appId="6596281663765476" chatSupport>
      <CustomChat pageId="109262068891778" minimized={true} />
    </FacebookProvider>
  )
}

export default FbChatPlugin