export const sortbyData = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  {
    value: "primary_release_date.desc",
    label: "Release Date Descending",
  },
  { value: "primary_release_date.asc", label: "Release Date Ascending" },
  { value: "original_title.asc", label: "Title (A-Z)" },
];

export const SIGN_IN_FORM_INPUTS_ARRAY = [
  {
    name: "Email",
    value: "email",
    rules: {
      required: "Email is required",
      pattern: {
        value: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,4}$/,
      },
    },
  },
  {
    name: "Password",
    value: "password",
    rules: { required: "Password is required" },
  },
];

export const DEFAULT_FORM_VALUES ={
    SIGN_IN:{
            email:'',
            password:''
    }
}
