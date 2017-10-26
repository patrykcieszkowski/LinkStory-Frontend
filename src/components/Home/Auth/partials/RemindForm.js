import React from 'react'
import { css } from 'aphrodite'
import { Form, FormGroup, Input, Button } from 'reactstrap'

import style from '../style'

export const LoginForm = props => (
  <Form className={css(style.form.form)}>
    <FormGroup className={css(style.form.group)}>
      <Input placeholder="E-mail address" className={css(style.inputs.input)} />
    </FormGroup>

    <FormGroup className={css(style.form.group)}>
      <Button className={css(style.buttons.button, style.buttons.remind)}>
        Submit
      </Button>
    </FormGroup>
  </Form>
)

export default LoginForm
