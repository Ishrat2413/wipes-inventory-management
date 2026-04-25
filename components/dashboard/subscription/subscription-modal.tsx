"use client";

import { useState } from "react";
import {
  ChevronsRight,
  Maximize2,
  X,
  Calendar,
  ChevronDown,
  Group,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SubscriptionFormData {
  customerName: string;
  email: string;
  frequency: string;
  status: string;
  startingDate: string;
  subscriptionType: string;
  note: string;
}

export interface SubscriptionModalProps {
  onClose: () => void;
  /** Called when "Save Subscription" is clicked. Wire up your POST /subscriptions here. */
  onSave?: (data: SubscriptionFormData) => Promise<void> | void;
  /** Pre-filled customer email shown in the subtitle */
  customerEmail?: string;
  /** Read-only metadata shown at the bottom */
  customerSince?: string;
  lifetimeValue?: string;
  /** Option lists – swap with API-fetched data */
  frequencyOptions?: string[];
  statusOptions?: string[];
}

//TODO
// ─── Defaults (replace / fetch from API) ───

const DEFAULT_FREQUENCY_OPTIONS = [
  "Every 1 Month",
  "Every 3 Months",
  "Every 6 Months",
  "Every 12 Months",
];
const DEFAULT_STATUS_OPTIONS = ["Active", "Inactive", "Paused", "Cancelled"];

// ── Sub-components ──

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

function SelectInput({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className='relative flex-1'>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className='w-full h-9.5 border border-[#E5E5E5] rounded-[6px] px-3 pr-8 text-sm text-[#2B2D2E] outline-none focus:border-[#A0A0A0] transition-colors appearance-none bg-white cursor-pointer'>
        <option value='' disabled>
          Select...
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {/* Chevron icon */}
      <ChevronDown className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0A0A0]' />
    </div>
  );
}

function DateInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className='relative flex-1'>
      <input
        type='date'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className='w-full h-9.5 border border-[#E5E5E5] rounded-[6px] px-3 pr-9 text-[13px] text-[#2B2D2E] outline-none focus:border-[#A0A0A0] transition-colors bg-white appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:cursor-pointer'
        placeholder='mm/dd/yyyy'
      />
      <Calendar className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0A0A0]' />
    </div>
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

function MetaRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value?: string;
}) {
  return (
    <div className='flex items-center justify-between py-1'>
      <div className='flex items-center gap-2 text-sm text-[#737373]'>
        {icon}
        <span>{label}</span>
      </div>
      <span className='text-sm text-[#474747]'>{value ?? "—"}</span>
    </div>
  );
}

// ─── Main Component ───

export default function SubscriptionModal({
  onClose,
  onSave,
  customerEmail,
  customerSince,
  lifetimeValue,
  frequencyOptions = DEFAULT_FREQUENCY_OPTIONS,
  statusOptions = DEFAULT_STATUS_OPTIONS,
}: SubscriptionModalProps) {
  const [form, setForm] = useState<SubscriptionFormData>({
    customerName: "",
    email: "",
    frequency: "",
    status: "",
    startingDate: "",
    subscriptionType: "",
    note: "",
  });

  const [saving, setSaving] = useState(false);

  function set(key: keyof SubscriptionFormData) {
    return (value: string) => setForm((prev) => ({ ...prev, [key]: value }));
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

        {/* ── Title ── */}
        <div className='px-5 pb-4'>
          <h2 className='text-2xl font-medium text-[#2B2D2E] leading-tight'>
            Add Subscription
          </h2>
          {customerEmail && (
            <p className='text-[13px] text-[#8A8A8A] mt-0.5'>{customerEmail}</p>
          )}
        </div>

        {/* ── Form card ── */}
        <div className='mx-5 bg-[#FBFAF9] border border-[#E5E5E5] rounded-[10px] px-5 py-5 flex flex-col gap-2 md:gap-5'>
          {/* Active Columns badge */}
          <div className='mb-2'>
            <span className='inline-flex items-center gap-1.5 text-sm text-[#2B2D2E] bg-white border border-[#E5E5E5] rounded-[10px] px-3 py-1'>
              <span className='w-2 h-2 rounded-full bg-[#008236] inline-block' />
              Active Columns
            </span>
          </div>

          {/* Fields */}
          <FormRow label='Customer Name'>
            <TextInput
              placeholder='Enter customer name...'
              value={form.customerName}
              onChange={set("customerName")}
            />
          </FormRow>

          <FormRow label='Email'>
            <TextInput
              placeholder='email@example.com...'
              value={form.email}
              onChange={set("email")}
              type='email'
            />
          </FormRow>

          <FormRow label='Frequency'>
            <SelectInput
              value={form.frequency}
              onChange={set("frequency")}
              options={frequencyOptions}
            />
          </FormRow>

          <FormRow label='Status'>
            <SelectInput
              value={form.status}
              onChange={set("status")}
              options={statusOptions}
            />
          </FormRow>

          <FormRow label='Starting Date'>
            <DateInput
              value={form.startingDate}
              onChange={set("startingDate")}
            />
          </FormRow>

          <FormRow label='Subscription Type'>
            <TextInput
              placeholder='Enter Subscription type'
              value={form.subscriptionType}
              onChange={set("subscriptionType")}
            />
          </FormRow>

          <FormRow label='Note'>
            <textarea
              placeholder='Optional note...'
              value={form.note}
              onChange={(e) => set("note")(e.target.value)}
              rows={4}
              className='w-full border border-[#E5E5E5] rounded-[6px] px-3 py-2 text-[13px] text-[#2B2D2E] placeholder:text-[#C0C0C0] outline-none focus:border-[#A0A0A0] transition-colors bg-white resize-none'
            />
          </FormRow>
        </div>

        {/* ── Meta info ── */}
        <div className='px-5 py-4 flex flex-col gap-1'>
          <MetaRow
            icon={<Group className='w-4 h-4' color='#8A8A8A' />}
            label='Customer Since'
            value={customerSince}
          />
          <MetaRow
            icon={<Group className='w-4 h-4' color='#8A8A8A' />}
            label='Lifetime Value'
            value={lifetimeValue}
          />
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
            className='h-9 px-4 rounded-[6px] border border-[#E5E7EB] text-[15px] bg-[#FAFAF9] text-[#1D3A5F] hover:bg-gray-50 transition-colors cursor-pointer'>
            {saving ? "Saving..." : "Save Subscription"}
          </button>
        </div>
      </div>
    </section>
  );
}
