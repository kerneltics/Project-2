// WARNING: ⛔ This is an awful piece of code and I'm going to delete. ⛔

const BASE_URL = import.meta.env.VITE_BASE_URL;

type ListingEndpoints =
  | `/listing/${number}`
  | `/listings/?page=${number}`
  | "/featured-listing";

type CreateListingEndpoint = "/create-listing";
type DeleteListingEndpoint = "/delete-listing";
type UpdateListingEndpoint = "/update-listing";

type AuthenticationEndpoints = "/login" | "/logout";

type ApiOptions =
  | {
      endpoint: ListingEndpoints;
      method?: "GET";
      formData?: undefined;
      data?: undefined;
      id?: undefined;
    }
  | {
      endpoint: AuthenticationEndpoints | CreateListingEndpoint;
      method: "POST";
      formData: FormData;
      data?: undefined;
      id?: undefined;
    }
  | {
      endpoint: DeleteListingEndpoint;
      method: "POST";
      id: number;
      formData?: undefined;
      data?: undefined;
    }
  | {
      endpoint: UpdateListingEndpoint;
      method: "POST";
      data: unknown;
      formData?: undefined;
      id?: undefined;
    };

export const api = async ({
  endpoint,
  method = "GET",
  formData,
  data = undefined,
}: ApiOptions) => {
  const url = BASE_URL + endpoint;
  const body = formData ? formData : data ? JSON.stringify(data) : undefined;

  const options: RequestInit = {
    method,
    body,
    credentials: "same-origin",
  };

  const response = await fetch(url, options);
  const json = await response.json();

  if (response.ok) {
    return json.result;
  }

  if (response.status === 401) {
    throw new Error("الرجاء تسجيل الدخول.");
  }

  if (response.status === 404) {
    throw new Error("لم يتم العثور على العقار الذي تبحث عنه. ");
  }

  if (response.status >= 500) {
    throw new Error("حدث خطأ ما في الخادم. حاول مرة اخرى.");
  }

  const errorMessage = json.message;

  throw new Error(errorMessage);
};
