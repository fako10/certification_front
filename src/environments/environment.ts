// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  password: 'password',
  authuser: 'auth-user',
  amount: 'amount',
  libellecertification: 'current_certification',
  idcertification: 'idcertification',
  baseUrl : 'http://localhost:8080/api/payement/paye',
  stripe: 'pk_test_51OW90nCxzoszcrHkvvS5ilqyqDG7Q9ZC9c0VgZFJwEkuSHDuRli939fpazCRH0LT6gpH0BX9Zpzc9sVI5Nb49lQG00VOBmELba'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
