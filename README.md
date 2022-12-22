# Example app

## Useful links

- **Swagger**

  - https://openapi-generator.tech/
  - https://www.npmjs.com/package/@openapitools/openapi-generator-cli

- **Design**

  - https://tailwindcss.com/
  - https://www.hyperui.dev/
  - https://headlessui.com/
  - https://react-table-v7.tanstack.com/
  - https://tanstack.com/table/v8/docs/guide/introduction

- **React-Query**

  - https://tanstack.com/query/v4/docs/react/overview
  - https://tkdodo.eu/blog/practical-react-query
  - https://ui.dev/react-query

- **React-Hook-Form**

  - https://react-hook-form.com/
  - https://react-hook-form.com/form-builder/

- **Schema validators**
  - https://github.com/jquense/yup
  - https://github.com/colinhacks/zod
  - https://zod.dev/

## Snippets

```json
{
  "React-Query Mutation": {
    "prefix": "rqm",
    "body": [
      "import { useMutation, useQueryClient } from '@tanstack/react-query';",
      "import { MutationKeys } from '../mutation-keys';",
      "import { QueryKeys } from '../query-keys';",
      "",
      "export function useMutation$1($2) {",
      "  const queryClient = useQueryClient();",
      "",
      "  const mutation = useMutation(",
      "    ($4) => $3($5),",
      "    {",
      "      mutationKey: [MutationKeys.$6],",
      "      onSuccess: () => {$7},",
      "      onError: (error) => {$8},",
      "    },",
      "  );",
      "  return mutation;",
      "}",
      "",
      "export default useMutation$1;",
      ""
    ],
    "description": "Create react-query mutation"
  },

  "React-Query Query": {
    "prefix": "rqq",
    "body": [
      "import { useQuery } from '@tanstack/react-query';",
      "import { QueryKeys } from '../query-keys';",
      "",
      "export function useQuery$1($2) {",
      "  const query = useQuery(",
      "    [QueryKeys.$3],",
      "    async () => (await $4($5)).data,",
      "    {",
      "      onError: (error) => {$6},",
      "    },",
      "  );",
      "  return query;",
      "}",
      "",
      "export default useQuery$1;",
      ""
    ],
    "description": "Create react-query query"
  }
}
```
