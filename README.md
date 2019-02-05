# 🏁 Final Form Vue

![Final Form Vue](banner.png)

✅ Zero dependencies

✅ Only peer dependencies: Vue and
[🏁 Final Form](https://github.com/final-form/final-form#-final-form)

✅ Opt-in subscriptions - only update on the state you need!

---

## Installation (soon)

```bash
npm install --save vue-final-form final-form
```

or

```bash
yarn add vue-final-form final-form
```

## Getting Started

🏁 Final Form Vue is a thin Vue wrapper for 🏁 Final Form, which is a
subscriptions-based form state management library that uses the
[Observer pattern](https://en.wikipedia.org/wiki/Observer_pattern), so only the
components that need updating are re-rendered as the form's state changes. By
default, 🏁 Vue Final Form subscribes to _all_ changes, but if you want to
fine tune your form to optimized blazing-fast perfection, you may specify only
the form state that you care about for rendering your gorgeous UI.

You can think of it a little like GraphQL's feature of only fetching the data
your component needs to render, and nothing else.

Here's what it looks like in your code:

```jsx
  <final-form :submit="onSubmit">
    <div slot-scope="{pristine, invalid}">
      <h2>Simple Default Input</h2>
      <div>
        <label>First Name</label>
        <field name="firstName" component="input" placeholder="First Name"/>
      </div>

      <h2>An Arbitrary Reusable Input Component</h2>
      <div>
        <label>Interests</label>
        <field name="interests">
          <InterestPicker/>
        </field>
      </div>

      <h2>Using slot-scope</h2>
      <field name="bio">
        <div slot-scope="{events, meta, name, value}">
          <div>
            <label>Bio</label>
            <textarea v-on="events" v-bind="{name, value}"/>
            <span v-if="meta.touched && meta.error">{{meta.error}}</span>
          </div>
        </div>
      </field>

      <button type="submit" :disabled="pristine || invalid">Submit</button>
    </div>
  </final-form>
```
