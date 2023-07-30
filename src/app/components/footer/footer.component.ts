import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  url: string = ''
  

  menuActiveA(event: MouseEvent) {
    const li = event.currentTarget as HTMLLIElement
    const img = li.querySelector('img') as HTMLImageElement
    let src = img.src
    console.log(src);
  }

  menuActive(event: MouseEvent) {
    const imageElement = (event.currentTarget as HTMLElement).querySelector('img') as HTMLImageElement;

    if (imageElement) {
      const src = imageElement.src;
      console.log('SRC da imagem:', src);
    }
  }
}
