import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MeetingList } from "./meeting/MeetingList";
import { MeetingCreate } from "./meeting/MeetingCreate";
import { MeetingEdit } from "./meeting/MeetingEdit";
import { MeetingShow } from "./meeting/MeetingShow";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { AuditionList } from "./audition/AuditionList";
import { AuditionCreate } from "./audition/AuditionCreate";
import { AuditionEdit } from "./audition/AuditionEdit";
import { AuditionShow } from "./audition/AuditionShow";
import { ActorList } from "./actor/ActorList";
import { ActorCreate } from "./actor/ActorCreate";
import { ActorEdit } from "./actor/ActorEdit";
import { ActorShow } from "./actor/ActorShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"OdiCastingService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Meeting"
          list={MeetingList}
          edit={MeetingEdit}
          create={MeetingCreate}
          show={MeetingShow}
        />
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="Audition"
          list={AuditionList}
          edit={AuditionEdit}
          create={AuditionCreate}
          show={AuditionShow}
        />
        <Resource
          name="Actor"
          list={ActorList}
          edit={ActorEdit}
          create={ActorCreate}
          show={ActorShow}
        />
      </Admin>
    </div>
  );
};

export default App;
