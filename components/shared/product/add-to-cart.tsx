'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';
import { Plus } from 'lucide-react';
import { CartItem } from '@/types';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { addItemToCart } from '@/lib/actions/cart.actions';

const AddToCart = ({ item }: { item: CartItem }) => {
  const router = useRouter();
  const { toast } = useToast();

  const handleAddToCart = async () => {
    const res = await addItemToCart(item);

    if (!res.success) {
      toast({
        variant: 'destructive',
        description: res.message,
      });
      return;
    }

    toast({
      description: `${item.name} added to cart`,
      action: (
        <ToastAction
          className='bg-primary text-white hover:bg-gray-800'
          altText='Got To Cart'
          onClick={() => router.push('/cart')}
        ></ToastAction>
      ),
    });
  };

  return (
    <Button className='w-full' type='button' onClick={handleAddToCart}>
      Add To Cart
    </Button>
  );
};

export default AddToCart;
