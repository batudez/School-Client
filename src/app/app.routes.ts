import { Routes } from '@angular/router';
import { AkademikTakvimComponent } from './components/home/akademik-takvim/akademik-takvim.component';
import { AlinanDerslerComponent } from './components/home/alinan-dersler/alinan-dersler.component';
import { AnnouncementComponent } from './components/home/announcement/announcement.component';
import { DersNotComponent } from './components/home/ders-not/ders-not.component';
import { HomeComponent } from './components/home/home.component';
import { NotGirisComponent } from './components/home/not-giris/not-giris.component';
import { TranskriptComponent } from './components/home/transkript/transkript.component';
import { UsersettingsComponent } from './components/home/usersettings/usersettings.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { homeGuard } from './guard/home.guard';

export const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: 'full' },
    {
        path: "home", component: HomeComponent, canActivate: [homeGuard], children: [
            { path: "akademikTakvim", component: AkademikTakvimComponent },
            { path: "notes", component: DersNotComponent },
            { path: "alinanDersler", component: AlinanDerslerComponent },
            { path: "transkript", component: TranskriptComponent },
            { path: "duyurular", component: AnnouncementComponent },
            { path: "notGiris", component: NotGirisComponent },
            { path: "userSettings", component: UsersettingsComponent },

        ]
    },
    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent },
];
