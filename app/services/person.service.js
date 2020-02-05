'use strict';
app.service('PersonService', function ($http, $q) {
    let people = null;

    return {
      fetchAllPeople: () => {
        if (people) {
          return new Promise(resolve => {
            resolve(people)
          })
        } else {
          return $http.get('person.json')
            .then(
              function (response) {
                people = response.data.data;
                return response.data.data;
              },
              function (errResponse) {
                console.error('Error while fetching users');
                return $q.reject(errResponse);
              }
            );
        }
      },

      getMetaData: () => {
        if (people) {
          return new Promise(resolve => {
            resolve(people.metaData.map(el=>el.name))
          })
        } else {
          return $http.get('person.json')
            .then(
              function (response) {
                people = response.data.data;
                return response.data.data.metaData.map(el=>el.name);
              },
              function (errResponse) {
                console.error('Error while fetching users');
                return $q.reject(errResponse);
              }
            );
        }
      },

      create: (user) => {
        return new Promise(resolve => {
          people.rows.push(Object.values(user));
          resolve(user);
        })
      },

      delete: (id) => {
        return new Promise(resolve => {
          people.rows.splice(id, 1);
          resolve(true);
        })
      }

    };

  }
);

