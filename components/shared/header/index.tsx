import { ShoppingCart, UserIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';

const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex justify-between items-center py-4'>
        <div className='flex items-center gap-3'>
          <Link href='/' className='flex items-center gap-3'>
            <Image
              src='/images/logo.svg'
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
              priority
            />
            <span className='hidden lg:block font-bold text-2xl'>
              {APP_NAME}
            </span>
          </Link>
        </div>

        <div className="space-x-2">
          <Button asChild variant='ghost'>
            <Link href='/cart'>
              <ShoppingCart className="w-4 h-4 mr-2" />
              Cart
            </Link>
          </Button>

          <Button asChild variant='ghost'>
            <Link href='/sign-in'>
              <UserIcon className="w-4 h-4 mr-2" />
              Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
