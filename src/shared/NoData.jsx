import { Empty, Typography } from 'antd'
import React from 'react'

const NoData = ({description}) => {
  return (
    <>
      <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            styles={{ image: { height: 60 } }}
            description={
              <Typography.Text>{description}</Typography.Text>
            }
          />
    </>
  )
}

export default NoData
