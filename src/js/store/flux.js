const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      contactList: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      createContact: async (name, email, address, phone) => {
        let url = "https://playground.4geeks.com/apis/fake/contact";
        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              full_name: name,
              email: email,
              agenda_slug: "uykarma",
              address: address,
              phone: phone,
            }),
          });

          if (response.ok) {
            getActions().getContactList();
          } else {
            throw new Error(`${response.status}`);
          }
        } catch (e) {
          console.error(e);
        }
      },
      getContactList: async () => {
        let url =
          "https://playground.4geeks.com/apis/fake/contact/agenda/uykarma";
        try {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          setStore({ contactList: data });
        } catch (e) {
          console.error(e);
        }
      },
      getContactById: async (id) => {
        let url = `https://playground.4geeks.com/apis/fake/contact/${id}`;
        try {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
      
          if (response.ok) {
            const data = await response.json();
            return data;
          } else {
            throw new Error(`Failed to fetch contact. Status: ${response.status}`);
          }
        } catch (e) {
          console.error(e);
        }
      },
      editContact: async (id, name, email, address, phone) => {
        let url = `https://playground.4geeks.com/apis/fake/contact/${id}`;
        try {
          const response = await fetch(url, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              full_name: name,
              email: email,
              agenda_slug: "uykarma",
              address: address,
              phone: phone,
            }),
          });

          if (response.ok) {
            console.log("Actualizado correctamente");
            getActions().getContactList();
          } else if (response.status === 404) {
            throw new Error(`${response.status}`);
          }

        } catch (e) {
          console.error(e);
        }
      },
      deleteContact: async (id) => {
        let url = `https://playground.4geeks.com/apis/fake/contact/${id}`;
        try {
          const response = await fetch(url, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (response.ok) {
            console.log("eliminado correctamente");
            getActions().getContactList();
          } else if (response.status === 404) {
            throw new Error(`${response.status}`);
          }
        } catch (e) {
          console.error(e);
        }
      },
      deleteAll:async ()=>{
        let url = 'https://playground.4geeks.com/apis/fake/contact/agenda/uykarma';
        try {
          const response = await fetch(url, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (response.ok) {
            console.log("eliminado correctamente");
            getActions().getContactList();
          } else if (response.status === 404) {
            throw new Error(`${response.status}`);
          }
        } catch (e) {
          console.error(e);
        }
      }
    },
  };
};

export default getState;
