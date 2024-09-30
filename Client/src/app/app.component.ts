import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header/header.component";
import { FooterComponent } from "./shared/footer/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";
import { SignupComponent } from './pages/signup/signup.component';
import { FormsModule } from '@angular/forms';  // <-- Make sure FormsModule is imported

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, SignupComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Client';
}
