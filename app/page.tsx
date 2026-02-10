import { Card, CardHeader, CardBody } from "@heroui/card"; //will change to import componenets as needed 

export default function Home() {
  return (
    <div className="h-screen w-screen p-4 flex flex-col gap-4">
      {/* Title section */}
      <header className="bg-orange-400/80 rounded-2xl p-3">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </header>

      {/* Dashboard grid */}
      <div className="flex-1 grid grid-cols-2 grid-rows-[2fr_1fr] gap-6">
        {/* Top-left quadrant — Financial (function access and design will be placed inside cards) */}  
        <div className="bg-black/5 rounded-2xl p-3 flex flex-col gap-2">
          <span className="text-xs font-medium text-foreground/50 uppercase tracking-wider">Financial</span>
          <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-3">
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
              <CardHeader className="pb-0">
                <h2 className="text-lg font-semibold">Recon</h2>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-default-500"> PENDING </p>
              </CardBody>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
              <CardHeader className="pb-0">
                <h2 className="text-lg font-semibold">Reimbursements</h2>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-default-500">PENDING</p>
              </CardBody>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
              <CardHeader className="pb-0">
                <h2 className="text-lg font-semibold">Purchase Orders</h2>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-default-500">PENDING</p>
              </CardBody>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
              <CardHeader className="pb-0">
                <h2 className="text-lg font-semibold">Stipends</h2>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-default-500">PENDING</p>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Top-right quadrant — Research */}
        <div className="bg-black/5 rounded-2xl p-3 flex flex-col gap-2">
          <span className="text-xs font-medium text-foreground/50 uppercase tracking-wider">Research</span>
          <div className="flex-1 flex flex-col gap-3">
            <Card className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20">
              <CardHeader className="pb-0">
                <h2 className="text-lg font-semibold">Document Search</h2>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-default-500">She can search docs here</p>
              </CardBody>
            </Card>

            <Card className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20">
              <CardHeader className="pb-0">
                <h2 className="text-lg font-semibold">Updated Cases</h2>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-default-500">It will show here most recent updates</p>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Bottom-left quadrant — Tasks */}
        <div className="bg-black/5 rounded-2xl p-3 flex flex-col gap-2">
          <span className="text-xs font-medium text-foreground/50 uppercase tracking-wider">Tasks</span>
          <Card className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20">
            <CardHeader className="pb-0">
              <h2 className="text-lg font-semibold">Pending Tasks</h2>
            </CardHeader>
            <CardBody>
              <p className="text-sm text-default-500"> Will show urgent tasks</p>
            </CardBody>
          </Card>
        </div>

        {/* Bottom-right quadrant — Communication */}
        <div className="bg-black/5 rounded-2xl p-3 flex flex-col gap-2">
          <span className="text-xs font-medium text-foreground/50 uppercase tracking-wider">Communication</span>
          <Card className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20">
            <CardHeader className="pb-0">
              <h2 className="text-lg font-semibold">Messages</h2>
            </CardHeader>
            <CardBody>
              <p className="text-sm text-default-500"> Will show newest messages</p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
