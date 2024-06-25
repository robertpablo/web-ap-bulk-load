import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  NgxFileDropEntry,
  NgxFileDropModule,
  FileSystemFileEntry,
} from 'ngx-file-drop';
import { ToastService } from '../toast';
import { CommonModule } from '@angular/common';
import { ChangeEventData, IArchivo } from '@ropabajo/shared/interfaces';
import { formatBytesString } from '@ropabajo/shared/functions';
import { BytesFormatPipe } from '@ropabajo/shared/pipe';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss'],
  imports: [NgxFileDropModule, CommonModule, BytesFormatPipe],
  standalone: true,
})
export class AppUploaderComponent {
  @Input() allowedMimeType!: string[];
  @Input() maxFileSize!: number; //= 5 * 1024 * 1024; // 5MB
  @Input() disabled: boolean = false;
  @Input() esConsulta: boolean = false;
  permiteDescargar: boolean = false;
  @Input() archivo?: IArchivo = undefined;

  @Output('on-change') onChangeEvent: EventEmitter<ChangeEventData> =
    new EventEmitter();
  @ViewChild('myInput') myInput!: ElementRef;
  @ViewChild('fileInput') fileInput!: ElementRef;

  fileItem?: File;

  mimeTypeExtensions = [
    { type: 'application/vnd.ms-excel', extension: 'xls' },
    {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      extension: 'xlsx',
    },
    { type: 'application/pdf', extension: 'pdf' },
    { type: 'text/csv', extension: 'csv' },
    { type: 'application/msword', extension: 'doc' },
    { type: 'image/*', extension: 'imagen' },
  ];

  constructor(private toastService: ToastService) {
    if (!this.archivo) {
      this.permiteDescargar = false;
    }
  }

  dropped(files: NgxFileDropEntry[]) {
    if (files.length > 0) {
      const droppedFile = files[0];
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          if (this.isValidFile(file)) {
            this.fileItem = file;
            this.onChangeEvent.emit({ item: file, action: 'add' });
          } else {
            this.myInput.nativeElement.value = '';
          }
        });
      }
    }
  }

  fileOver(event: any) {
    console.log('File over event:', event);
  }

  fileLeave(event: any) {
    console.log('File leave event:', event);
  }

  isValidFile(file: File): boolean {
    if (this.allowedMimeType && file.type) {
      let message = '';

      if (file.size > this.maxFileSize) {
        message = `El archivo ${file.name} (${formatBytesString(
          file.size
        )}) excede el tamaño permitido (${formatBytesString(
          this.maxFileSize
        )})`;
        this.toastService.warning(message);
        return false;
      }

      if (file.type && !this.allowedMimeType.includes(file.type)) {
        message = `Sólo se permite archivos en formato ${this.allowedMimeType
          .map(
            (i) =>
              (
                this.mimeTypeExtensions.find((x) => x.type === i) || {
                  extension: i,
                }
              ).extension
          )
          .join(', ')}`;
        this.toastService.warning(message);
        return false;
      }
    }
    return true;
  }

  onDelete() {
    this.fileItem = undefined;
    this.onChangeEvent.emit({ action: 'delete', item: undefined });
    this.permiteDescargar = false;
    this.archivo = undefined;
  }

  onDownloadFile() {
    if (this.archivo && this.archivo.identificador) {
      this.onRunDownloadFile(this.archivo.identificador);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['archivo'] && this.archivo) {
      this.permiteDescargar = true;
    }
  }

  getMimeType(extension: string): string | undefined {
    const mimeType = this.mimeTypeExtensions.find(
      (ext) => ext.extension === extension
    );
    return mimeType ? mimeType.type : undefined;
  }


  onRunDownloadFile(identificador: number) {
    this.disabled = true;
    // Reemplaza esto con la lógica de descarga real
    setTimeout(() => {
      this.disabled = false;
      alert('Descarga simulada completada.');
    }, 2000);
  }
}
