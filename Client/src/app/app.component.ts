import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header/header.component";
import { FooterComponent } from "./shared/footer/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";
import { SignupComponent } from './pages/signup/signup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Client';
}
