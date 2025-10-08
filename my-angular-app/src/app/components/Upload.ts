import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-upload',
  templateUrl: '../pages/uploadProductForm.html',
})
export class ProductUploadComponent {
  productForm: FormGroup;
  file: File | null = null;
  selectedImage: string | null = null;
  uploadSuccess = false;
  uploadError: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.file = input.files[0];

      // Show preview
      const reader = new FileReader();
      reader.onload = e => this.selectedImage = e.target?.result as string;
      reader.readAsDataURL(this.file);
    }
  }

  onSubmit(): void {
    if (this.productForm.invalid || !this.file) return;

    const formData = new FormData();
    formData.append('name', this.productForm.value.name);
    formData.append('description', this.productForm.value.description);
    formData.append('image', this.file);

    this.http.post('http://localhost:8080/api/products', formData).subscribe({
      next: () => {
        this.uploadSuccess = true;
        this.uploadError = null;
        this.productForm.reset();
        this.file = null;
        this.selectedImage = null;
      },
      error: (err) => {
        this.uploadError = err.error?.message || 'Failed to upload product';
        this.uploadSuccess = false;
      }
    });
  }
}
