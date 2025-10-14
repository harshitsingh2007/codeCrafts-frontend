import { useNavigate, useParams } from 'react-router-dom';
import { userAuthStore } from '../../store/auth/auth';
import { useState } from 'react';

export default function ResetPassword() {
  const { token } = useParams();
  const Navigate=useNavigate();
  const { resetPassword } = userAuthStore();
  const [data, setData] = useState({ password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getValue = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!data.password) newErrors.password = 'Password is required';
    else if (data.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!data.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (data.password !== data.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setIsLoading(true);

    try {
      const result = await resetPassword(data.password,token);
      if (result?.success) {
        alert('Password reset successful! You can now log in with your new password.');
        setData({ password: '', confirmPassword: '' });
        Navigate('/login');
      } else {
        alert(result?.message || 'Failed to reset password. The link may have expired.');
      }
    } catch (err) {
      console.error('Reset password error:', err);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Resetting password...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center py-8">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
        <p className="text-gray-400 mb-6 text-center">
          Please enter your new password below.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium">
              New Password
            </label>
            <input 
              type="password" 
              name="password" 
              id="password"
              value={data.password}  
              onChange={getValue} 
              placeholder="Enter new password" 
              required 
              className={`w-full px-4 py-2 rounded-lg bg-gray-700 border ${errors.password ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium">
              Confirm New Password
            </label>
            <input 
              type="password" 
              name="confirmPassword" 
              id="confirmPassword"
              value={data.confirmPassword}  
              onChange={getValue} 
              placeholder="Confirm new password" 
              required 
              className={`w-full px-4 py-2 rounded-lg bg-gray-700 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
            )}
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`mt-4 py-2 px-4 rounded-lg font-medium transition-colors ${isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
          >
            {isSubmitting ? 'Resetting Password...' : 'Reset Password'}
          </button>
        </form>
      </div>
    </div>
  );
}