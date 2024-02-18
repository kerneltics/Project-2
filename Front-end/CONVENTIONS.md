# Conventions

### Always use named exports

`named exports` are more clear then `default exports`. For example:

```tsx
// Export a named button component.
export const Button = () => {
  return <button>Click me</button>;
};
```

```tsx
// Import a named button component
import { Button } from "@/components/Button";
```

### Make sure to format code before you commit

Run the following commend in the terminal to format your code before you commit your changes.

```sh
   pnpm run format
```

### Use the path alias

When you import components use the `@/` import alias.

✅

```tsx
import { cn } form "@/lib/utils";
import { Button } from "@/components/Button";
```

⛔

```tsx
import { cn } from "../../lib/utils";
import { Button } from "../components/Button";
```
