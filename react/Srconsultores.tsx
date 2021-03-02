import React from 'react'

interface SraccountProps { }

const Sraccount: StorefrontFunctionComponent<SraccountProps> = ({ }) => {
  return (
    <div>
      <h1>Hola Mundo</h1>
    </div>
  )
}

Sraccount.schema = {
  title: 'editor.Sraccount.title',
  description: 'editor.Sraccount.description',
  type: 'object',
  properties: {},
}

export default Sraccount
