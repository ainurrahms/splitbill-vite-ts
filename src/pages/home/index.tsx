import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

function Home() {
  return (
    <section>
      <h1 className="text-4xl font-bold">Split Bill</h1>
      <div className="flex flex-col gap-5">
        <Card className="mt-5">
          <CardHeader>
            <CardTitle>Your Bill</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Rp.</p>
          </CardContent>
        </Card>
        <div className="flex gap-5">
          <Button className="w-1/2">Insert the Bill</Button>
          <Button className="w-1/2">Scan the bill</Button>
        </div>
      </div>
      <div>
        <Card className="mt-5">
          <CardHeader>
            <CardTitle>List of Your Transaction</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between font-semibold">
            <p>Product Name</p>
            <p>Price</p>
          </CardContent>
          <CardContent className="flex justify-between">
            <p>Product Name</p>
            <p>Price</p>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card className="mt-5">
          <CardHeader>
            <CardTitle>List of Your Friend</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between font-semibold">
            <p>Name</p>
          </CardContent>
          <CardContent className="flex justify-between">
            <p>Budi</p>
            <Button className="rounded-full">+</Button>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="text-center">Share to Your Social Media</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center gap-5">
            <Button className="h-full rounded-full" variant={'outline'}>
              <img src="/wa.svg" className="w-7 h-7" />
            </Button>
            <Button className="h-auto rounded-full " variant="outline">
              <img src="/ig.svg" className="w-7 h-7" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default Home;
