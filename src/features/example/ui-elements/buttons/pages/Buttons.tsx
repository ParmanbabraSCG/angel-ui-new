import ComponentCard from "../../../../../components/common/ComponentCard";
import PageBreadcrumb from "../../../../../components/common/PageBreadCrumb";
import PageMeta from "../../../../../components/common/PageMeta";
import Button from "../../../../../components/ui/Button";
import { BoxIcon } from "../../../../../icons";

export default function Buttons() {
  return (
    <div>
      <PageMeta
        title="React.js Buttons Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Buttons Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Buttons" />
      <div className="space-y-5 sm:space-y-6">
        {/* Primary Button */}
        <ComponentCard title="Primary Button">
          <div className="flex items-center gap-5">
            <Button size="sm" variant="primary">
              Button Text
            </Button>
            <Button size="md" variant="primary">
              Button Text
            </Button>
          </div>
        </ComponentCard>
        {/* Primary Button with Start Icon */}
        <ComponentCard title="Primary Button with Left Icon">
          <div className="flex items-center gap-5">
            <Button
              size="sm"
              variant="primary"
              startIcon={<BoxIcon className="size-5" />}
            >
              Button Text
            </Button>
            <Button
              size="md"
              variant="primary"
              startIcon={<BoxIcon className="size-5" />}
            >
              Button Text
            </Button>
          </div>
        </ComponentCard>
        {/* Primary Button with Start Icon */}
        <ComponentCard title="Primary Button with Right Icon">
          <div className="flex items-center gap-5">
            <Button
              size="sm"
              variant="primary"
              endIcon={<BoxIcon className="size-5" />}
            >
              Button Text
            </Button>
            <Button
              size="md"
              variant="primary"
              endIcon={<BoxIcon className="size-5" />}
            >
              Button Text
            </Button>
          </div>
        </ComponentCard>
        {/* Success Button */}
        <ComponentCard title="Success Button">
          <div className="flex items-center gap-5">
            <Button size="sm" variant="success">
              Button Text
            </Button>
            <Button size="md" variant="success">
              Button Text
            </Button>
          </div>
        </ComponentCard>
        {/* Danger Button */}
        <ComponentCard title="Danger Button">
          <div className="flex items-center gap-5">
            <Button size="sm" variant="danger">
              Button Text
            </Button>
            <Button size="md" variant="danger">
              Button Text
            </Button>
          </div>
        </ComponentCard>
        {/* Outline Button */}
        <ComponentCard title="Secondary Button">
          <div className="flex items-center gap-5">
            {/* Outline Button */}
            <Button size="sm" variant="outline">
              Button Text
            </Button>
            <Button size="md" variant="outline">
              Button Text
            </Button>
          </div>
        </ComponentCard>
        {/* Full Width Button */}
        <ComponentCard title="Full Width Button">
          <div className="w-full max-w-sm">
            <Button fullWidth>Full Width Button</Button>
          </div>
        </ComponentCard>
        {/* Loading Button */}
        <ComponentCard title="Loading Button">
          <div className="flex items-center gap-5">
            <Button isLoading>Loading Button</Button>
            <Button isLoading variant="outline">Loading Outline</Button>
            <Button isLoading variant="success">Saving...</Button>
          </div>
        </ComponentCard>
        {/* Button Types */}
        <ComponentCard title="Button Types">
          <div className="flex items-center gap-5">
            <Button type="button" onClick={() => alert('Button clicked!')}>Type: Button</Button>
            <Button type="submit">Type: Submit</Button>
            <Button type="reset">Type: Reset</Button>
          </div>
        </ComponentCard>
        {/* Outline Button with Start Icon */}
        <ComponentCard title="Outline Button with Left Icon">
          <div className="flex items-center gap-5">
            <Button
              size="sm"
              variant="outline"
              startIcon={<BoxIcon className="size-5" />}
            >
              Button Text
            </Button>
            <Button
              size="md"
              variant="outline"
              startIcon={<BoxIcon className="size-5" />}
            >
              Button Text
            </Button>
          </div>
        </ComponentCard>
        {/* Outline Button with Start Icon */}
        <ComponentCard title="Outline Button with Right Icon">
          <div className="flex items-center gap-5">
            <Button
              size="sm"
              variant="outline"
              endIcon={<BoxIcon className="size-5" />}
            >
              Button Text
            </Button>
            <Button
              size="md"
              variant="outline"
              endIcon={<BoxIcon className="size-5" />}
            >
              Button Text
            </Button>
          </div>
        </ComponentCard>
      </div>
    </div>
  );
} 