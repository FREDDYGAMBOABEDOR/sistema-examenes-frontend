import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriasComponent } from './pages/admin/view-categorias/view-categorias.component';
import { AddCategoriasComponent } from './pages/admin/add-categorias/add-categorias.component';
import { ViewExamenesComponent } from './pages/admin/view-examenes/view-examenes.component';
import { AddExamenComponent } from './pages/admin/add-examen/add-examen.component';
import { ActualizarExamenComponent } from './pages/admin/actualizar-examen/actualizar-examen.component';
import { ViewExamenPreguntasComponent } from './pages/admin/view-examen-preguntas/view-examen-preguntas.component';
import { AddPreguntaComponent } from './pages/admin/add-pregunta/add-pregunta.component';
import { ActualizarPreguntaComponent } from './pages/admin/actualizar-pregunta/actualizar-pregunta.component';
import { LoadExamenComponent } from './pages/user/load-examen/load-examen.component';
import { InstruccionesComponent } from './pages/user/instrucciones/instrucciones.component';
import { StartComponent } from './pages/user/start/start.component';





const routes: Routes = [{

    path : '',
    component : HomeComponent, // ng g c home temenos que genra
    pathMatch : 'full'


},
  {
    path : 'signup',
    component : SignupComponent,
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent,
    pathMatch : 'full'
  },
  {
    path:'admin',
    component:DashboardComponent,
   // pathMatch:'full',
    canActivate:[AdminGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent
      }, {
        path:'',
        component: WelcomeComponent
      },
       {
      path:'categorias',
      component:ViewCategoriasComponent

       },
      {
    path:'add-categorias',
    component:AddCategoriasComponent
    },
      {
    path:'examenes',
    component:ViewExamenesComponent
    },
      {
    path:'add-examen',
    component:AddExamenComponent
    },
      {
    path:'examen/:examenId',
    component:ActualizarExamenComponent
    },
      {
    path:'ver-preguntas/:examenId/:titulo',// los : significa que va a pasar un parametro por
    component:ViewExamenPreguntasComponent
    },
      {
    path:'add-pregunta/:examenId/:titulo',
    component: AddPreguntaComponent
    },
      {
    path:'pregunta/:preguntaId',
    component: ActualizarPreguntaComponent
    }
    
    ]
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
   // pathMatch:'full',
    canActivate:[NormalGuard],
    children:[{
      path:':catId',
      component:LoadExamenComponent
    },
    {
      path:'instrucciones/:examenId',
      component:InstruccionesComponent
    }

    ]
  },
    {
      path:'start/:examenId',
      component:StartComponent,
      canActivate:[NormalGuard]
    }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
