import {useNow} from "@vueuse/core"
const now = useNow();
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return {
    now: now.value,
    body,
  };
});
