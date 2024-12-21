export interface UserProfile {
  uid: string;
  email: string;
  displayName: string | null;
  photoURL: string | null;
  createdAt: Date;
  lastLoginAt: Date;
  businessName?: string;
  businessType?: 'rental' | 'restaurant';
  subscription?: {
    plan: 'starter' | 'professional' | 'enterprise';
    status: 'active' | 'cancelled' | 'expired';
    expiresAt: Date;
  };
}