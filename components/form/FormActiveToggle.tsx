import { FormActiveToggleLayout } from "@/components/form/FormActiveToggleLayout";
import { activeFormApi, unactiveFormApi } from "@/features/form/queries";

async function activeForm(id: string): Promise<void> {
  await activeFormApi(id);
}

async function unactiveForm(id: string): Promise<void> {
  await unactiveFormApi(id);
}

type FormActiveToggleProps = {
  formId: string;
  active: boolean;
};

export function FormActiveToggle({ formId, active }: FormActiveToggleProps) {
  const onFormActive = () => {
    activeForm(formId);
  };
  const onFormDeactive = () => {
    unactiveForm(formId);
  };

  return (
    <FormActiveToggleLayout
      active={active}
      formId={formId}
      onFormActive={onFormActive}
      onFormDeactive={onFormDeactive}
    />
  );
}
