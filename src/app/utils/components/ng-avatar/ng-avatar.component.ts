import { Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ng-avatar',
  templateUrl: './ng-avatar.component.html',
  styleUrls: ['./ng-avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgAvatarComponent implements OnChanges {

  @Input() name = '';
  @Input() text = '';
  @Input() photo = '';
  @Input() size = 32;
  @Input() color = '';
  @Input() status = null;
  initials = '';

  colors = [
    '#F44336',
    '#E91E63',
    '#9C27B0',
    '#673AB7',
    '#3F51B5',
    '#2196F3',
    '#03A9F4',
    '#00BCD4',
    '#009688',
    '#4CAF50',
    '#8BC34A',
    '#FFC107',
    '#FF9800',
    '#FF5722',
    '#795548',
    '#9E9E9E',
    '#607D8B'
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['name']) {
      this.initials = this.getInitials();
      if (!changes['color']) {
        // @ts-ignore
        this.color = this.colors[this.calculateColor()];
      }
    }
    if (changes['text']) {
      this.initials = changes['text'].currentValue;
      if (!changes['color']) {
        // @ts-ignore
        this.color = this.colors[this.calculateColor()];
      }
    }
    if (changes['photo'] && changes['photo'].currentValue) {
      // @ts-ignore
      this.color = '#FFFFFF';
    }
  }

  calculateColor(): number {
    let sum = 0;
    for (let i = 0; i < this.name.length; i++) {
        sum += this.name.charCodeAt(i);
    }
    return sum % this.colors.length;
  }

  getInitials(): string {
    const parts = this.name.split(' ');
    let initials = '';
    for (const part of parts) {
      if (part.length > 0 && part !== '') {
        initials += part[0].toUpperCase();
      }
    }
    return initials;
  }

}
