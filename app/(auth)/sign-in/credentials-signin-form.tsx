'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signInDefaultValues } from '@/lib/constants';
import Link from 'next/link';

const CredentialsSignInForm = () => {
  return (
    <form>
      <div className='space-y-6'>
        <div>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            name='email'
            type='email'
            autoComplete='email'
            defaultValue={signInDefaultValues.email}
            required
          />
        </div>
        <div>
          <Label htmlFor='email'>Password</Label>
          <Input
            id='password'
            name='password'
            type='password'
            autoComplete='password'
            defaultValue={signInDefaultValues.password}
            required
          />
        </div>
        <div>
          <Button className='w-full' variant='default'>
            Sign In
          </Button>
        </div>
        <div className='text-sm text-cetner text-muted-foreground'>
          Don&apos;t have an account?{' '}
          <Link href='/sign-up' target='_self' className='link'>
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
};
export default CredentialsSignInForm;
