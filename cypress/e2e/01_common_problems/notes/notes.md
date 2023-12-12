## Common mistakes when writing tests

The most common mistake is [not reading the documentation](https://docs.cypress.io). Cypress ahs done a great job with the documentation and there’s quite a lot you can learn from it. Definitely give it a go. 

There’s a great article on Best practices there that will guide you through some of the basic [patterns and antipatterns](https://docs.cypress.io/guides/references/best-practices).

In addition to these I have some examples of common mistakes that I see in the community:

## Targetting improper elements
Let’s say we have a following element:

```html
<button disabled>
  <span>Click me!</span>
</button>
```

There’s actually a big difference when targeting `span` vs. targetting `button` element. Our `button` element is disabled and therefore a user should not be able to click on it. Cypress does a [couple of checks in the background](https://docs.cypress.io/guides/core-concepts/interacting-with-elements#Actionability) to make sure that a real user would be able to click on our element. Therefore using `cy.get('button')` would not click on our element, because it has `disabled` property on it.

But in case of using `cy.get('span')`, there does not seem to be a problem. Cypress will click on this element, but there will be no interaction, because the click will essentially be dead.