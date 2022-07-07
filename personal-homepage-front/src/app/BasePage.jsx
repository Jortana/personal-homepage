import React from 'react'

import RouterWaiter from 'react-router-waiter'

import routes from './routes'
import onRouteBefore from './routes/onRouteBefore'

export default function BasePage() {
  return (
    <div>
      <RouterWaiter routes={routes} onRouteBefore={onRouteBefore} />
    </div>
  )
}
