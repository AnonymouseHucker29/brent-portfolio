"use client"

import { FacebookProvider, CustomChat } from 'react-facebook'

const FbChatPlugin = () => {
  return (
    <FacebookProvider appId="1017046112998468" chatSupport>
      <CustomChat pageId="109568422183829" minimized={true} />
    </FacebookProvider>
  )
}

export default FbChatPlugin