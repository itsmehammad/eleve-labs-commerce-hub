
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface CheckoutFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  notes?: string;
}

interface CheckoutFormProps {
  onSubmit: (data: CheckoutFormData) => void;
  total: number;
}

const CheckoutForm = ({ onSubmit, total }: CheckoutFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutFormData>();

  return (
    <DialogContent className="bg-gray-900 border-yellow-500/20 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl text-yellow-500">Checkout</DialogTitle>
      </DialogHeader>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Personal Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" className="text-white">First Name *</Label>
              <Input
                id="firstName"
                {...register('firstName', { required: 'First name is required' })}
                className="bg-gray-800 border-gray-700 text-white focus:border-yellow-500"
              />
              {errors.firstName && (
                <p className="text-red-400 text-sm mt-1">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="lastName" className="text-white">Last Name *</Label>
              <Input
                id="lastName"
                {...register('lastName', { required: 'Last name is required' })}
                className="bg-gray-800 border-gray-700 text-white focus:border-yellow-500"
              />
              {errors.lastName && (
                <p className="text-red-400 text-sm mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>
          
          <div>
            <Label htmlFor="email" className="text-white">Email Address *</Label>
            <Input
              id="email"
              type="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className="bg-gray-800 border-gray-700 text-white focus:border-yellow-500"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          
          <div>
            <Label htmlFor="phone" className="text-white">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              {...register('phone', { required: 'Phone number is required' })}
              className="bg-gray-800 border-gray-700 text-white focus:border-yellow-500"
            />
            {errors.phone && (
              <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Delivery Address */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Delivery Address</h3>
          <div>
            <Label htmlFor="address" className="text-white">Street Address *</Label>
            <Input
              id="address"
              {...register('address', { required: 'Address is required' })}
              className="bg-gray-800 border-gray-700 text-white focus:border-yellow-500"
            />
            {errors.address && (
              <p className="text-red-400 text-sm mt-1">{errors.address.message}</p>
            )}
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="city" className="text-white">City *</Label>
              <Input
                id="city"
                {...register('city', { required: 'City is required' })}
                className="bg-gray-800 border-gray-700 text-white focus:border-yellow-500"
              />
              {errors.city && (
                <p className="text-red-400 text-sm mt-1">{errors.city.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="state" className="text-white">State *</Label>
              <Input
                id="state"
                {...register('state', { required: 'State is required' })}
                className="bg-gray-800 border-gray-700 text-white focus:border-yellow-500"
              />
              {errors.state && (
                <p className="text-red-400 text-sm mt-1">{errors.state.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="zipCode" className="text-white">ZIP Code *</Label>
              <Input
                id="zipCode"
                {...register('zipCode', { required: 'ZIP code is required' })}
                className="bg-gray-800 border-gray-700 text-white focus:border-yellow-500"
              />
              {errors.zipCode && (
                <p className="text-red-400 text-sm mt-1">{errors.zipCode.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Order Notes */}
        <div>
          <Label htmlFor="notes" className="text-white">Order Notes (Optional)</Label>
          <Textarea
            id="notes"
            {...register('notes')}
            placeholder="Any special instructions for your order..."
            className="bg-gray-800 border-gray-700 text-white focus:border-yellow-500"
          />
        </div>

        {/* Order Summary */}
        <div className="border-t border-gray-700 pt-4">
          <div className="flex justify-between items-center text-lg font-semibold">
            <span className="text-white">Total Amount:</span>
            <span className="text-yellow-500">${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg py-3"
        >
          Complete Order
        </Button>
      </form>
    </DialogContent>
  );
};

export default CheckoutForm;
