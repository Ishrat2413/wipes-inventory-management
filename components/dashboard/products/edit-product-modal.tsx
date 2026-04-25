// components/dashboard/edit-product-modal.tsx
"use client";

import { useState } from "react";
import {
  ChevronsRight,
  Maximize2,
  X,
  Package,
  AlertCircle,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ProductRow {
  id: string;
  name: string;
  price: number;
  stock: number;
  status?: "low" | "out";
  description?: string;
  sku?: string;
  category?: string;
}

export interface EditProductModalProps {
  product: ProductRow;
  onClose: () => void;
  /** Called when "Save Changes" is clicked. Wire up your PATCH /products/:id here. */
  onSave?: (data: ProductRow) => Promise<void> | void;
  /** Called when "Delete" is clicked. Wire up your DELETE /products/:id here. */
  onDelete?: (id: string) => Promise<void> | void;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className='text-[15px] text-[#2B2D2E] font-normal w-30 shrink-0 pt-2.25'>
      {children}
    </span>
  );
}

function TextInput({
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className='w-full h-9.5 border border-[#E5E5E5] rounded-[6px] px-3 text-[13px] text-[#2B2D2E] placeholder:text-[#979191] placeholder:text-sm outline-none focus:border-[#A0A0A0] transition-colors bg-white'
    />
  );
}

function NumberInput({
  placeholder,
  value,
  onChange,
  min = 0,
}: {
  placeholder: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
}) {
  return (
    <input
      type='number'
      min={min}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
      className='w-full h-9.5 border border-[#E5E5E5] rounded-[6px] px-3 text-[13px] text-[#2B2D2E] placeholder:text-[#979191] placeholder:text-sm outline-none focus:border-[#A0A0A0] transition-colors bg-white'
    />
  );
}

function FormRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col md:flex-row items-start gap-x-4 gap-y-2'>
      <Label>{label}</Label>
      <div className='flex-1 w-full'>{children}</div>
    </div>
  );
}

// ─── Main Component ───

export default function EditProductModal({
  product,
  onClose,
  onSave,
  onDelete,
}: EditProductModalProps) {
  const [form, setForm] = useState<ProductRow>({ ...product });
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  function set(key: keyof ProductRow) {
    return (value: string | number) =>
      setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSave() {
    if (!onSave) return;
    setSaving(true);
    try {
      await onSave(form);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!onDelete) return;
    setDeleting(true);
    try {
      await onDelete(product.id);
    } finally {
      setDeleting(false);
    }
  }

  // Determine stock status display
  const getStockStatusColor = () => {
    if (form.status === "out") return "text-red-600";
    if (form.status === "low") return "text-amber-600";
    return "text-green-600";
  };

  const getStockStatusText = () => {
    if (form.status === "out") return "Out of Stock";
    if (form.status === "low") return "Low Stock";
    return "In Stock";
  };

  return (
    <section
      className='fixed inset-0 z-50 flex justify-end p-3'
      onClick={onClose}>
      {/* Backdrop */}
      <div className='absolute inset-0 backdrop-blur-sm bg-black/20' />

      {/* Panel */}
      <div
        className='relative z-10 w-full max-w-xl bg-white rounded-[10px] h-full overflow-y-auto shadow-2xl flex flex-col'
        onClick={(e) => e.stopPropagation()}>
        {/* ── Top icon bar ── */}
        <div className='flex items-center justify-between px-4 pt-4 pb-3'>
          <div className='flex items-center gap-1'>
            <button
              type='button'
              onClick={onClose}
              className='p-1.5 rounded-md hover:bg-gray-100 transition-colors'>
              <ChevronsRight className='w-4 h-4 text-[#262626]' />
            </button>
            <button
              type='button'
              className='p-1.5 rounded-md hover:bg-gray-100 transition-colors'>
              <Maximize2 className='w-3 h-3 text-[#262626]' />
            </button>
          </div>
          <button
            type='button'
            onClick={onClose}
            className='p-1.5 rounded-md hover:bg-gray-100 transition-colors'>
            <X className='w-4 h-4 text-[#8A8A8A]' />
          </button>
        </div>

        {/* ── Title row (name + Delete button) ── */}
        <div className='px-5 pb-4 flex items-start justify-between'>
          <div>
            <h2 className='text-2xl font-medium text-[#2B2D2E] leading-tight'>
              {product.name}
            </h2>
            <div className='flex items-center gap-2 mt-1'>
              <p className='text-[13px] text-[#8A8A8A]'>
                SKU: {product.sku || "N/A"}
              </p>
              <span
                className={`text-[13px] font-medium ${getStockStatusColor()}`}>
                {getStockStatusText()}
              </span>
            </div>
          </div>
          {onDelete && (
            <button
              type='button'
              onClick={handleDelete}
              disabled={deleting}
              className='h-8 px-3.5 rounded-[6px] border border-[#E5E7EB] text-[13px] bg-[#FAFAF9] text-[#1D3A5F] hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-colors cursor-pointer disabled:opacity-60 mt-0.5'>
              {deleting ? "Deleting..." : "Delete"}
            </button>
          )}
        </div>

        {/* ── Form card ── */}
        <div className='mx-5 bg-[#FBFAF9] border border-[#E5E5E5] rounded-[10px] px-5 py-5 flex flex-col gap-2 md:gap-5'>
          {/* Active badge */}
          <div className='mb-2'>
            <span className='inline-flex items-center gap-1.5 text-sm text-[#2B2D2E] bg-white border border-[#E5E5E5] rounded-[10px] px-3 py-1'>
              <Package className='w-3.5 h-3.5 text-[#008236]' />
              Product Details
            </span>
          </div>

          {/* Fields */}
          <FormRow label='Product Name'>
            <TextInput
              placeholder='Enter product name...'
              value={form.name}
              onChange={set("name")}
            />
          </FormRow>

          <FormRow label='Price ($)'>
            <NumberInput
              placeholder='Enter price...'
              value={form.price}
              onChange={set("price")}
              min={0}
            />
          </FormRow>

          <FormRow label='Stock Quantity'>
            <NumberInput
              placeholder='Enter stock quantity...'
              value={form.stock}
              onChange={set("stock")}
              min={0}
            />
          </FormRow>

          <FormRow label='SKU'>
            <TextInput
              placeholder='Enter SKU...'
              value={form.sku ?? ""}
              onChange={set("sku")}
            />
          </FormRow>

          <FormRow label='Category'>
            <TextInput
              placeholder='Enter category...'
              value={form.category ?? ""}
              onChange={set("category")}
            />
          </FormRow>

          <FormRow label='Description'>
            <textarea
              placeholder='Product description...'
              value={form.description ?? ""}
              onChange={(e) => set("description")(e.target.value)}
              rows={4}
              className='w-full border border-[#E5E5E5] rounded-[6px] px-3 py-2 text-[13px] text-[#2B2D2E] placeholder:text-[#C0C0C0] outline-none focus:border-[#A0A0A0] transition-colors bg-white resize-none'
            />
          </FormRow>

          {/* Stock warning */}
          {form.stock <= 5 && form.stock > 0 && (
            <div className='flex items-center gap-2 p-3 bg-amber-50 border border-amber-200 rounded-md'>
              <AlertCircle className='w-4 h-4 text-amber-600' />
              <span className='text-sm text-amber-700'>
                Low stock warning: Only {form.stock} units remaining
              </span>
            </div>
          )}

          {form.stock === 0 && (
            <div className='flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md'>
              <AlertCircle className='w-4 h-4 text-red-600' />
              <span className='text-sm text-red-700'>
                Out of stock: This product is currently unavailable
              </span>
            </div>
          )}
        </div>

        {/* ── Actions ── */}
        <div className='mt-auto px-5 pb-5 flex justify-end gap-2 md:mb-14'>
          <button
            type='button'
            onClick={onClose}
            className='h-9 px-4 rounded-[6px] border border-[#E5E7EB] text-[15px] bg-[#FAFAF9] text-[#1D3A5F] hover:bg-gray-200 transition-colors cursor-pointer'>
            Cancel
          </button>
          <button
            type='button'
            onClick={handleSave}
            disabled={saving}
            className='h-9 px-4 rounded-[6px] border border-[#E5E7EB] text-[15px] bg-[#FAFAF9] text-[#1D3A5F] hover:bg-gray-50 transition-colors cursor-pointer disabled:opacity-60'>
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </section>
  );
}
